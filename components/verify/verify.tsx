"use client"; // for Next.js app router
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";

type TWorldcoinWidget = {
  onSuccess: () => void;
  handleVerify: (proof: ISuccessResult) => Promise<void>;
};

type TAppId = `app_${string}`;
const app_id: TAppId = (process.env.NEXT_PUBLIC_APP_ID as TAppId) || "app_";
const action: TAppId = (process.env.NEXT_PUBLIC_ACTION_ID as TAppId) || "app_";

const WorldcoinWidget: React.FC<TWorldcoinWidget> = ({
  onSuccess,
  handleVerify,
}) => {
  return (
    <IDKitWidget
      app_id={app_id}
      action={action}
      onSuccess={onSuccess} // callback when the modal is closed
      handleVerify={handleVerify} // callback when the proof is received
      verification_level={VerificationLevel.Orb}
    >
      {({ open }) => (
        // This is the button that will open the IDKit modal
        <button onClick={open}>Verify with World ID</button>
      )}
    </IDKitWidget>
  );
};

export default WorldcoinWidget;
