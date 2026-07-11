import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Wrench } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const emptySkill = {
  name: "",
  rating: 0,
};

function Skills() {
  const { resumeId } = useParams();

  const [loading, setLoading] = useState(false);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [skillsList, setSkillsList] = useState([emptySkill]);

  // Load existing skills only once
  useEffect(() => {
    if (resumeInfo?.skills?.length) {
      setSkillsList(resumeInfo.skills);
    }
  }, [resumeInfo]);

  const handleChange = (index, field, value) => {
    const updatedSkills = skillsList.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
          }
        : item,
    );

    setSkillsList(updatedSkills);
  };

  const AddNewSkills = () => {
    setSkillsList([...skillsList, { ...emptySkill }]);
  };

  const RemoveSkills = () => {
    if (skillsList.length === 1) return;

    setSkillsList((prev) => prev.slice(0, -1));
  };

  const onSave = async () => {
    try {
      setLoading(true);

      const data = {
        data: {
          skills: skillsList.map(({ id, documentId, ...rest }) => rest),
        },
      };

      await GlobalApi.UpdateResumeDetail(resumeId, data);

      // Update Context AFTER successful save
      setResumeInfo((prev) => ({
        ...prev,
        skills: skillsList,
      }));

      toast.success("Skills Updated");
    } catch (err) {
      toast.error("Server Error, Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 hover:rotate-6">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Skills</h2>
            <p className="text-sm text-gray-500">
              Add your top professional key skills
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="my-3 flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </span>

            <div className="flex-1 space-y-1.5">
              <label className="text-xs font-medium text-gray-700">Name</label>

              <Input
                className="w-full focus-visible:ring-2 focus-visible:ring-primary/40"
                value={item.name || ""}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>

            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating || 0}
              onChange={(value) => handleChange(index, "rating", value)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
          >
            + Add More Skill
          </Button>

          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5"
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

export default Skills;
