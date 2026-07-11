import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";
import { FileX2 } from "lucide-react";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = () => {
    setLoading(true);
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setResumeList(resp.data.data);
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );
  };

  const firstName = user?.firstName || user?.fullName?.split(" ")[0];

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <div className="flex flex-col gap-1 border-b border-gray-100 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {firstName ? `Welcome back, ${firstName}` : "My Resumes"}
        </h2>
        <p className="text-gray-500">
          Start creating an AI resume for your next job role
        </p>
        {!loading && resumeList.length > 0 && (
          <p className="mt-1 text-sm text-gray-400">
            {resumeList.length} resume{resumeList.length !== 1 ? "s" : ""} so
            far
          </p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />

        {loading &&
          [1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-[280px] animate-pulse rounded-lg bg-slate-200"
            />
          ))}

        {!loading &&
          resumeList.map((resume, index) => (
            <div
              key={resume?.id ?? index}
              className="animate-in fade-in slide-in-from-bottom-2"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: "backwards",
              }}
            >
              <ResumeCardItem resume={resume} refreshData={GetResumesList} />
            </div>
          ))}
      </div>

      {!loading && resumeList.length === 0 && (
        <div className="mt-16 flex flex-col items-center justify-center gap-2 text-center text-gray-400">
          <FileX2 className="h-10 w-10" />
          <p className="text-sm">
            No resumes yet — hit "+ Add Resume" above to create your first one.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
