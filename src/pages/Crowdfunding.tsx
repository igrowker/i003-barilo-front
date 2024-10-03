import CrowdComponent from "@/components/crowdfunding/CrowdComponent";

function Crowdfunding() {
  return (
    <>
      <CrowdComponent
        profile="organizer"
        image={"src/assets/images/amico.svg"}
      />
    </>
  );
}

export const CrowdfundingDonor = () => {
  return (
    <>
      <CrowdComponent profile="donor" image="src\assets\images\pana.svg" />
      <CrowdComponent
        profile="approvedDonation"
        image="src\assets\images\coins.svg"
      />
    </>
  );
};

export default Crowdfunding;
