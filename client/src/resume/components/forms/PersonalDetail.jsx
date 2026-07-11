import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import {
  LoaderCircle,
  User2,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
import { toast } from "sonner";

const fields = [
  { name: "firstName", label: "First Name", icon: User2, span: 1 },
  { name: "lastName", label: "Last Name", icon: User2, span: 1 },
  { name: "jobTitle", label: "Job Title", icon: Briefcase, span: 2 },
  { name: "address", label: "Address", icon: MapPin, span: 2 },
  { name: "phone", label: "Phone", icon: Phone, span: 1 },
  { name: "email", label: "Email", icon: Mail, span: 1 },
];

function PersonalDetail({ enabledNext }) {
  const params = useParams();

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  const handleInputChange = (e) => {
    // enabledNext(false);
    setJustSaved(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      data: formData,
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
        toast(error.response.data.error.message);
        setLoading(false);
      },
    );
  };

  const filledCount = fields.filter((f) => resumeInfo?.[f.name]).length;
  const progress = Math.round((filledCount / fields.length) * 100);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 hover:rotate-6">
          <User2 className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900">Personal Detail</h2>
          <p className="text-sm text-gray-500">
            Get started with the basic information
          </p>
        </div>
        <span className="hidden text-xs font-medium text-gray-400 sm:block">
          {filledCount}/{fields.length} complete
        </span>
      </div>

      {/* progress bar */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <form onSubmit={onSave}>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {fields.map(({ name, label, icon: Icon, span }) => (
            <div
              key={name}
              className={span === 2 ? "col-span-2 space-y-1.5" : "space-y-1.5"}
            >
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
              <div className="group relative">
                <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary" />
                <Input
                  name={name}
                  required
                  defaultValue={resumeInfo?.[name]}
                  onChange={handleInputChange}
                  className="pl-9 transition-shadow focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
          {justSaved && !loading && (
            <span className="flex items-center gap-1 text-sm text-primary animate-in fade-in slide-in-from-right-2">
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
  );
}

export default PersonalDetail;
