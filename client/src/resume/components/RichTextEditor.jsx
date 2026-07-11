import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle, Copy, Check } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "../../../service/AIModal";
import { toast } from "sonner";

const PROMPT =
  "Position title: {positionTitle}. Based on this position title, give me 5-7 concise bullet points describing relevant work experience for a resume. Do not include an experience level or seniority. Do not return a JSON array or markdown code fences. Return only a plain HTML unordered list using <ul> and <li> tags.";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue || "");
  const { resumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue, index]);

  const cleanAIResponse = (text) =>
    text
      .replace(/```html/gi, "")
      .replace(/```/g, "")
      .replace(/\[|\]/g, "")
      .trim();

  const applyChange = (newValue) => {
    setValue(newValue);

    onRichTextEditorChange?.({ target: { value: newValue } });
  };

  const GenerateSummeryFromAI = async () => {
    const title = resumeInfo?.experience?.[index]?.title;
    if (!title) {
      toast("Please add a position title first");
      return;
    }

    if (value && value.trim().length > 0) {
      const confirmed = window.confirm(
        "This will replace your current summary. Continue?",
      );
      if (!confirmed) return;
    }

    setLoading(true);
    try {
      const prompt = PROMPT.replace("{positionTitle}", title);
      const result = await AIChatSession.sendMessage(prompt);
      const resp = result.response.text();
      applyChange(cleanAIResponse(resp));
      toast("Summary generated");
    } catch (err) {
      console.error(err);
      toast("Something went wrong generating the summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      const plainText = value.replace(/<[^>]+>/g, "");
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast("Couldn't copy to clipboard");
    }
  };

  const wordCount = value
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <label className="text-xs">Summary</label>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={handleCopy}
            className="flex gap-2"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={GenerateSummeryFromAI}
            disabled={loading}
            className="flex gap-2 border-primary text-primary"
          >
            {loading ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Brain className="h-4 w-4" /> Generate from AI
              </>
            )}
          </Button>
        </div>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange?.(e);
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnStyles /> <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <BtnClearFormatting /> <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <HtmlButton />{" "}
          </Toolbar>
        </Editor>
      </EditorProvider>

      <div className="text-xs text-gray-400 text-right mt-1">
        {wordCount} words
      </div>
    </div>
  );
}

export default RichTextEditor;
