import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
import {
  Brain,
  LoaderCircle,
  FileText,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { AIChatSession } from "./../../../../service/AIModal";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level and Experienced Level , in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const params = useParams();
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();
  //Dought
  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const GenerateSummeryFromAI = async () => {
    try {
      setAiLoading(true);

      const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);

      const result = await AIChatSession.sendMessage(PROMPT);
      const aiText = result.response.text();

      const cleaned = aiText
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      setAiGenerateSummeryList(parsed);
    } catch (err) {
      console.error("AI SUMMARY PARSE ERROR:", err);
    } finally {
      setAiLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      data: {
        summery: summery,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
        setJustSaved(true);
        setTimeout(() => setJustSaved(false), 2500);
      },
      (error) => {
        setLoading(false);
      },
    );
  };

  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 hover:rotate-6">
            <FileText className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">Summery</h2>
            <p className="text-sm text-gray-500">
              Add a summery for your job title
            </p>
          </div>
        </div>

        <form className="mt-6" onSubmit={onSave}>
          <div className="flex items-end justify-between gap-3">
            <label className="text-sm font-medium text-gray-700">
              Add Summery
            </label>
            <Button
              variant="outline"
              onClick={() => GenerateSummeryFromAI()}
              type="button"
              size="sm"
              disabled={aiLoading}
              className="flex gap-2 border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
            >
              {aiLoading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-3 min-h-[140px] transition-shadow focus-visible:ring-2 focus-visible:ring-primary/40"
            required
            value={summery}
            defaultValue={summery ? summery : resumeInfo?.summery}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-3 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
            {justSaved && !loading && (
              <span className="flex animate-in items-center gap-1 fade-in slide-in-from-right-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Saved
              </span>
            )}
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList && (
        <div className="my-6">
          <div className="mb-3 flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            <h2 className="text-lg font-bold text-gray-900">Suggestions</h2>
          </div>
          <div className="space-y-3">
            {aiGeneratedSummeryList?.map((item, index) => {
              const isSelected = summery === item?.summary;
              return (
                <div
                  key={index}
                  onClick={() => setSummery(item?.summary)}
                  className={`cursor-pointer rounded-lg border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <h2 className="font-bold text-primary">
                      Level: {item?.experience_level}
                    </h2>
                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{item?.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Summery;
