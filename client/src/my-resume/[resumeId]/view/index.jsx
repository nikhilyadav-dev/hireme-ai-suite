import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/resume/components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { Download, Share2, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function ViewResume() {
  const printRef = useRef(null);
  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} Resume`,
        text: "Check out my resume!",
        url: `${import.meta.env.VITE_APP_URL}/my-resume/${resumeId}/view`,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getResumeInfo();
  }, []);
  const getResumeInfo = async () => {
    try {
      const resp = await GlobalApi.GetResumeById(resumeId);

      setResumeInfo(resp.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to load resume.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Resume",
    // Forces the print/PDF page to exactly match the resume's own
    // dimensions instead of falling back to the browser's default
    // page size (usually Letter), which is what was causing the
    // resume to get scaled/clipped across an oversized page.
    pageStyle: `
      @page {
        /* valid syntax: "auto" alone lets the page size shrink-wrap
           to the actual rendered content height. The previous
           "210mm auto" was invalid CSS and got silently ignored,
           which is what caused the extra near-empty page. */
        size: auto;
        margin: 0;
      }
      @media print {
        html, body {
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    `,
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin h-10 w-10" />
      </div>
    );
  }
  return (
    <ResumeInfoContext.Provider
      value={{
        resumeInfo,
        setResumeInfo,
      }}
    >
      {/* Top Section (Hidden while printing) */}
      <div className="print:hidden">
        <Header />
        <div className="my-10 mx-6 md:mx-20 lg:mx-36">
          <h2 className="text-center text-3xl font-bold">
            🎉 Your AI Resume is Ready!
          </h2>
          <p className="text-center text-gray-500 mt-3">
            Download your resume or share it with anyone using your personal
            resume link.
          </p>
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share Resume
            </Button>
          </div>
        </div>
      </div>
      {/* Resume */}
      <div className="my-10 mx-6 md:mx-20 lg:mx-36">
        <div
          ref={printRef}
          className="bg-white shadow-lg mx-auto min-h-[297mm] print:min-h-0 print:shadow-none print:m-0"
          style={{
            width: "210mm",
            padding: "15mm",
            boxSizing: "border-box",
          }}
        >
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}
export default ViewResume;
