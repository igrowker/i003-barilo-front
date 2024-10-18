import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useForm, FormProvider } from "react-hook-form";
import { StepTwoFormData, PassageData } from "@/types/step/StepTwoFormData";
import { Switch } from "@/components/ui/switch";
import Passage from "./Passage";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

type StepTwoProps = {
  onNext: (data: {
    origin: string;
    destination: string;
    selectedOutbound: PassageData | null;
    selectedReturn: PassageData | null;
    destinationId: number;
  }) => void;
  stepTwoData: StepTwoFormData | null;
};

const API_URL = import.meta.env.VITE_API_URL;

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
  const { t } = useTranslation();
  const methods = useForm<StepTwoFormData>();
  const { handleSubmit, register, getValues } = methods;
  const { token } = useAuth();
  const navigate = useNavigate();
  const [isFlight, setIsFlight] = useState(true);
  const [showTickets, setShowTickets] = useState(false);
  const [selectedOutbound, setSelectedOutbound] = useState<PassageData | null>(
    null
  );
  const [selectedReturn, setSelectedReturn] = useState<PassageData | null>(
    null
  );
  const [destinationId, setDestinationId] = useState<number>(0);
  const [tickets, setTickets] = useState<PassageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (destinationId !== null) {
      console.log(destinationId);
    }
  }, [destinationId]);

  const fetchTickets = async (destinationName: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/transports`, {
        params: { destinationName },
        headers: { Authorization: `Bearer ${token}` },
      });
      const transports = response.data.data.content;
      if (!transports || transports.length === 0) {
        throw new Error(t('stepTwo.fetchTickets_error'));
      }

      setDestinationId(transports[0].destination.id);

      setTickets(transports);
      setShowTickets(true);
    } catch (error) {
      console.error("Error al obtener los pasajes:", error);
      setError(t('stepTwo.fetchTickets_setError'));
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = () => {
    const allValues = getValues();
    const destination = allValues.destination?.trim().toLowerCase();
    const validCities = [
      "buenos aires",
      "san martín de los andes",
      "bariloche",
      "mendoza",
      "ushuaia",
      "salta",
    ];
    if (!destination || !validCities.includes(destination)) {
      console.error("Ciudad seleccionada no válida.");
      return;
    }
    fetchTickets(destination);
  };

  const handleSelectOutbound = (ticket: PassageData) => {
    setSelectedOutbound(ticket);
  };

  const handleSelectReturn = (ticket: PassageData) => {
    setSelectedReturn(ticket);
  };

  const canProceed =
    selectedOutbound !== null ||
    selectedReturn !== null ||
    destinationId !== null;

  const handleNext = () => {
    const selectedDestination = getValues("destination").trim().toLowerCase();
    if (canProceed) {
      onNext({
        origin: getValues("origin"),
        destination: selectedDestination,
        selectedOutbound,
        selectedReturn,
        destinationId,
      });
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto mb-5 text-sm text-justify font-primary font-regular text-secondary-celeste md:text-base lg:text-lg w-80 md:w-96 lg:w-full">
      {t('stepTwo.return_information_message')}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto space-y-5 w-80 mb-36"
      >
        <InputField
          label={t("stepTwo.origin")}
          name="origin"
          placeholder={t("stepTwo.origin")}
          options={[
            "Buenos Aires",
            "San Martín de los Andes",
            "Bariloche",
            "Mendoza",
            "Ushuaia",
            "Salta",
          ]}
          {...register("origin", { required: true })}
        />
        <InputField
          label={t("stepTwo.destination")}
          name="destination"
          placeholder={t("stepTwo.destination")}
          options={[
            "Buenos Aires",
            "San Martín de los Andes",
            "Bariloche",
            "Mendoza",
            "Ushuaia",
            "Salta",
          ]}
          {...register("destination", { required: true })}
        />
        <div className="flex items-center gap-x-4">
          <ButtonBlue
            text={t("buttons.searchButton")}
            type="submit"
            isActive={!methods.formState.isSubmitting}
          />
          <ButtonBlue
            text={t("buttons.cancelButton")}
            onClick={handleCancel}
            isActive={false}
          />
        </div>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="pr-2 overflow-hidden text-lg font-bold loader-text whitespace-nowrap text-primary-blue">
              {t('stepTwo.loading')}
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center text-red-500">
            {error}
          </div>
        ) : (
          <>
            {showTickets && (
              <div className="flex items-center mt-5 gap-x-4">
                <Switch checked={isFlight} onCheckedChange={setIsFlight} />
              </div>
            )}
            {showTickets && (
              <Passage
                isFlight={isFlight}
                onSelect={handleSelectOutbound}
                onSelectReturn={handleSelectReturn}
                tickets={tickets}
                originInput={methods.getValues("origin")}
                destinationInput={methods.getValues("destination")}
              />
            )}
            {showTickets && canProceed && (
              <ButtonBlue
                text={t("buttons.nextButton")}
                onClick={handleNext}
                isActive={canProceed}
              />
            )}
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default StepTwo;
