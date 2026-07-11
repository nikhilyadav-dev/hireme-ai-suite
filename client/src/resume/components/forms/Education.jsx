import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle, GraduationCap } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";

const emptyEducation = {
  universityName: "",
  degree: "",
  major: "",
  startDate: "",
  endDate: "",
  description: "",
};

function Education() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { resumeId } = useParams();

  const [loading, setLoading] = useState(false);

  const [educationalList, setEducationalList] = useState([emptyEducation]);

  // Load data only once when resumeInfo arrives
  useEffect(() => {
    if (resumeInfo?.education?.length) {
      setEducationalList(resumeInfo.education);
    }
  }, [resumeInfo]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const updatedList = educationalList.map((item, i) =>
      i === index
        ? {
            ...item,
            [name]: value,
          }
        : item,
    );

    setEducationalList(updatedList);
  };

  const AddNewEducation = () => {
    setEducationalList([...educationalList, { ...emptyEducation }]);
  };

  const RemoveEducation = () => {
    if (educationalList.length === 1) return;

    setEducationalList((prev) => prev.slice(0, -1));
  };

  const onSave = async () => {
    try {
      setLoading(true);

      const data = {
        data: {
          education: educationalList.map(({ id, documentId, ...rest }) => rest),
        },
      };

      await GlobalApi.UpdateResumeDetail(resumeId, data);

      // Update Context ONLY after successful save
      setResumeInfo((prev) => ({
        ...prev,
        education: educationalList,
      }));

      toast.success("Education Updated");
    } catch (err) {
      toast.error("Failed to update education");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 hover:rotate-6">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Education</h2>
            <p className="text-sm text-gray-500">
              Add your educational details
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {educationalList.map((item, index) => (
          <div
            key={index}
            className="my-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {item?.universityName || item?.degree
                  ? [item?.degree, item?.universityName]
                      .filter(Boolean)
                      .join(" · ")
                  : "New Education"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  University Name
                </label>
                <Input
                  name="universityName"
                  value={item.universityName || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Degree
                </label>
                <Input
                  name="degree"
                  value={item.degree || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Major
                </label>
                <Input
                  name="major"
                  value={item.major || ""}
                  onChange={(e) => handleChange(e, index)}
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
                  value={item.startDate || ""}
                  onChange={(e) => handleChange(e, index)}
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
                  value={item.endDate || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>

              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Description
                </label>
                <Textarea
                  name="description"
                  value={item.description || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
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
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
            onClick={AddNewEducation}
          >
            + Add More Education
          </Button>

          <Button
            variant="outline"
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
            onClick={RemoveEducation}
          >
            - Remove
          </Button>
        </div>

        <Button
          disabled={loading}
          onClick={onSave}
          className="bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Education;
