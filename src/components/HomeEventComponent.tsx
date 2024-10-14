import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HijoProps {
  title: string;
  text: string;
  button: string;
  admin: boolean;
  member: boolean;
}

const HomeEventComponent: React.FC<HijoProps> = ({
  title,
  text,
  button,
  admin,
  member,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-trip");
  };

  return (
    <div className="bg-[#0098EF] h-44 justify-between flex flex-col rounded-2xl">
      <div className="p-5">
        {admin ? (
          <h1 className="font-['League_Spartan'] text-2xl text-[#E4E4E4] text-center font-bold">
            {title}
          </h1>
        ) : (
          <div>
            {member ? (
              <h1 className="font-['League_Spartan'] text-2xl text-[#E4E4E4] font-bold">
                {title}
              </h1>
            ) : (
              <h1 className="font-['League_Spartan'] text-2xl text-[#E4E4E4] text-center font-bold">
                {title}
              </h1>
            )}
          </div>
        )}
        <p className="text-[#E4E4E4] font-bold">{text}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        {admin ? (
          <Button
            onClick={handleClick}
            variant={"default"}
            className={cn(
              "w-[120px] justify-center font-normal mb-5 bg-[#006BA8] border-none rounded-2xl"
            )}
          >
            <span className="text-[#FAFAFA]">{button}</span>
          </Button>
        ) : (
          <div>
            {member ? (
              <Button
                variant={"default"}
                className={cn(
                  "w-[120px] justify-center font-normal mb-5 bg-[#006BA8] border-none rounded-2xl"
                )}
              >
                <span className="text-[#FAFAFA]">{button}</span>
              </Button>
            ) : (
              <Button
                variant={"default"}
                className={cn(
                  " justify-center font-normal mb-5 bg-[#006BA8] border-none rounded-2xl"
                )}
              >
                <span className="text-[#FAFAFA]">{button}</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeEventComponent;
