import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
          )}
          <Button
            className="flex gap-2"
            disabled={!enabledNext}
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            {" "}
            Next
            <ArrowRight />{" "}
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
      ) : null}
    </div>
  );
}

export default FormSection;
