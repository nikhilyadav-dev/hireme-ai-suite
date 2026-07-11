import { Loader2, Plus, FileText } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "./../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data).then(
      (resp) => {
        if (resp) {
          setLoading(false);
          navigation(
            "/dashboard/resume/" + resp.data.data.documentId + "/edit",
          );
        }
      },
      (error) => {
        setLoading(false);
      },
    );
  };

  return (
    <div>
      <div
        className="group flex h-[280px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:shadow-xl"
        onClick={() => setOpenDialog(true)}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90">
          <Plus className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-black transition-colors group-hover:text-primary">
          Create New Resume
        </span>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <DialogTitle>Create New Resume</DialogTitle>
            </div>
            <DialogDescription asChild>
              <div className="pt-2">
                <p className="text-sm text-black">
                  Add a title for your new resume
                </p>
                <Input
                  className="my-3 focus-visible:ring-2 text-black focus-visible:ring-primary/40"
                  placeholder="Ex. Full Stack Resume"
                  onChange={(e) => setResumeTitle(e.target.value)}
                />
              </div>
            </DialogDescription>
            <div className="flex justify-end gap-3 pt-2">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
                className="bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
