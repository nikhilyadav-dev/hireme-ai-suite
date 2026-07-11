import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Home } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(true);
  const { resumeId } = useParams();
  return (
    <div>
      <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Link to={"/dashboard"}>
            <Button
              size="icon"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-transform hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Home className="h-4 w-4" />
            </Button>
          </Link>
          <div className="h-6 w-px bg-gray-200" />
          <ThemeColor />
        </div>

        <div className="flex items-center gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-transform hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <Button
            size="sm"
            disabled={!enabledNext}
            className="flex items-center gap-2 bg-primary text-white transition-transform enabled:hover:-translate-y-0.5 enabled:hover:opacity-90 enabled:hover:shadow-lg enabled:hover:shadow-primary/30 disabled:opacity-50"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Personal Detail  */}
      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnabledNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summery enabledNext={(v) => setEnabledNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education enabledNext={(v) => setEnabledNext(v)} />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Navigate to={"/my-resume/" + resumeId + "/view"} />
      ) : null}
    </div>
  );
}

export default FormSection;
