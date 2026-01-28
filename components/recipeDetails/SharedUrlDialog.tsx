import { toast } from "sonner";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";

type Props = {
  sharedDialogOpen: boolean;
  setSharedDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  url: string | null;
};

function SharedUrlDialog({
  sharedDialogOpen,
  setSharedDialogOpen,
  url,
}: Props) {
  function copyURl() {
    navigator.clipboard.writeText(url || "");
    toast.success("Link copied to clipboard");
  }

  return (
    <Dialog onOpenChange={setSharedDialogOpen} open={sharedDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Copy the link to this recipe</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input value={url || ""} readOnly />
          <Button className="w-full" onClick={copyURl}>
            Copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default SharedUrlDialog;
