
import { cn } from "../../lib/utils";
export const Button = ({ className }) => {
        return (
          <button
            className={cn(
              "bg-black w-[233px], h-[47px], rounded-[23px] text-[#FFFFFF] px-3 py-2 font-roboto",
              className
            )}
          >
            MyFeedback for business
          </button>
        );
}