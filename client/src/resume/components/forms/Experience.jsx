import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { LoaderCircle, Briefcase, Trash2 } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "./../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Experience() {
  const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummery: "",
  };
  const [experinceList, setExperinceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();

  const AddNewExperience = () => {
    setExperinceList([
      ...experinceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      },
    ]);
  };

  const RemoveExperience = () => {
    setExperinceList((experinceList) => experinceList.slice(0, -1));
  };

  const handleChange = (index, event) => {
    const newEntries = experinceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperinceList(newEntries);
  };

  useEffect(() => {
    resumeInfo?.experience?.length > 0 &&
      setExperinceList(resumeInfo?.experience);
  }, [resumeInfo]);

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experinceList,
    });
  }, [experinceList]);

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = experinceList.slice();
    newEntries[index][name] = e.target.value;

    setExperinceList(newEntries);
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        experience: experinceList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (res) => {
        setLoading(false);
        toast("Details updated !");
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
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Professional Experience
            </h2>
            <p className="text-sm text-gray-500">
              Add your previous job experience
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {experinceList.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 my-5 hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {item?.title || item?.companyName
                  ? [item?.title, item?.companyName].filter(Boolean).join(" · ")
                  : "New Experience"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Position Title
                </label>
                <Input
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.title}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Company Name
                </label>
                <Input
                  name="companyName"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.companyName}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  City
                </label>
                <Input
                  name="city"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.city}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  State
                </label>
                <Input
                  name="state"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.state}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Start Date
                </label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.startDate}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  End Date
                </label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={(event) => handleChange(index, event)}
                  defaultValue={item?.endDate}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
              <div className="col-span-2">
                {/* Work Summery  */}
                <RichTextEditor
                  index={index}
                  defaultValue={item?.workSummery}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "workSummery", index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewExperience}
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
          >
            {" "}
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            onClick={RemoveExperience}
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
          >
            <Trash2 className="mr-1 h-4 w-4" />
            Remove
          </Button>
        </div>
        <Button
          disabled={loading}
          onClick={() => onSave()}
          className="bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Experience;
