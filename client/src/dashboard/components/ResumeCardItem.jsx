import {
  Loader2Icon,
  MoreVertical,
  Pencil,
  Eye,
  Download,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from "../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const themeColor = resume?.themeColor || "#6366f1";

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        toast("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      },
    );
  };

  return (
    <div className="group relative">
      <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
        <div className="relative h-[280px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          {/* top accent strip, colored by the resume's theme */}
          <div className="h-2 w-full" style={{ backgroundColor: themeColor }} />

          {/* miniature "live preview" of a resume, built from real markup, not a static icon */}
          <div className="flex h-[calc(100%-8px)] flex-col gap-3 p-5">
            <div className="flex items-center gap-2.5">
              <div
                className="h-7 w-7 shrink-0 rounded-full"
                style={{ backgroundColor: `${themeColor}33` }}
              />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-3/5 rounded-full bg-gray-800/80" />
                <div className="h-1.5 w-2/5 rounded-full bg-gray-300" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-gray-100" />
              <div className="h-1.5 w-11/12 rounded-full bg-gray-100" />
              <div className="h-1.5 w-4/6 rounded-full bg-gray-100" />
            </div>

            <div className="space-y-1.5 pt-1">
              <div
                className="h-1.5 w-1/4 rounded-full"
                style={{ backgroundColor: `${themeColor}80` }}
              />
              <div className="h-1.5 w-full rounded-full bg-gray-100" />
              <div className="h-1.5 w-5/6 rounded-full bg-gray-100" />
            </div>

            <div className="space-y-1.5 pt-1">
              <div
                className="h-1.5 w-1/4 rounded-full"
                style={{ backgroundColor: `${themeColor}80` }}
              />
              <div className="h-1.5 w-5/6 rounded-full bg-gray-100" />
              <div className="h-1.5 w-2/3 rounded-full bg-gray-100" />
            </div>

            <div className="mt-auto flex gap-1.5">
              <div
                className="h-4 w-10 rounded-full"
                style={{ backgroundColor: `${themeColor}1a` }}
              />
              <div
                className="h-4 w-14 rounded-full"
                style={{ backgroundColor: `${themeColor}1a` }}
              />
              <div
                className="h-4 w-8 rounded-full"
                style={{ backgroundColor: `${themeColor}1a` }}
              />
            </div>
          </div>

          {/* hover overlay CTA */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-white/70 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
            <span
              className="flex translate-y-2 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              style={{ backgroundColor: themeColor }}
            >
              <Pencil className="h-3.5 w-3.5" />
              Continue editing
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between gap-2 px-1">
        <div className="min-w-0">
          <h2
            className="truncate text-sm font-semibold text-gray-900"
            title={resume.title}
          >
            {resume.title || "Untitled Resume"}
          </h2>
          <span className="text-xs text-gray-400">Click to keep editing</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="shrink-0 rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="cursor-pointer gap-2"
              onClick={() =>
                navigation("/dashboard/resume/" + resume.documentId + "/edit")
              }
            >
              <Pencil className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer gap-2"
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              <Eye className="h-4 w-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer gap-2"
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              <Download className="h-4 w-4" />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer gap-2 text-red-600 focus:text-red-600"
              onClick={() => setOpenAlert(true)}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete "
              {resume.title || "this resume"}" from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onDelete}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCardItem;
