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
  }

  return (
    <Dialog onOpenChange={setSharedDialogOpen} open={sharedDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Copy this url to access to the recipe</DialogTitle>
          <div className="space-y-4">
            <Input value={url || ""} readOnly />
            <button onClick={copyURl}>Copy</button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default SharedUrlDialog;
