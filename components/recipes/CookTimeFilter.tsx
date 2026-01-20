"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function CookTimeFilter() {
  const searchParams = useSearchParams();
  const cookingTime = searchParams.get("cookingTime");
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  return (
    <Select
      onValueChange={(val) => {
        if (val === "clear") {
          params.delete("cookingTime");
        } else {
          params.set("cookingTime", val);
        }

        const query = params.toString();
        router.push(query ? `/recipes?${params} ` : "/recipes", {
          scroll: false,
        });
      }}
    >
      <SelectTrigger className="w-full" size="md">
        <SelectValue
          placeholder={cookingTime ? cookingTime + " minutes" : "Max Cook Time"}
        >
          {cookingTime ? `${cookingTime} minutes` : "Max Cook Time"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectItem value="0">
            <div
              className={`flex size-4 items-center justify-center rounded-full ${cookingTime === "0" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {cookingTime === "0" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            0 minutes
          </SelectItem>
          <SelectItem value="5">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${cookingTime === "5" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {cookingTime === "5" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            5 minutes
          </SelectItem>
          <SelectItem value="10">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${cookingTime === "10" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {cookingTime === "10" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            10 minutes
          </SelectItem>
          <SelectItem value="15">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${cookingTime === "15" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {cookingTime === "15" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            15 minutes
          </SelectItem>
          <SelectItem value="20">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${cookingTime === "20" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {cookingTime === "20" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            20 minutes
          </SelectItem>
          <SelectItem value="clear">Clear</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CookTimeFilter;
