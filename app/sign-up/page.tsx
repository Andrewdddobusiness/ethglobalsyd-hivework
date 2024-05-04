"use client";
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";

import handleVerify from "@/actions/verify";

export default function SignUpPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSuccess = useCallback(() => {
    // window.location.href = "/explore";
  }, []);

  const onSuccess2 = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified
    window.alert(
      `Successfully verified with World ID!
      Your nullifier hash is: ` + result.nullifier_hash
    );
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login or create account</h1>
            <p className="text-balance text-muted-foreground">
              Connect and verify with World ID.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2 justify-center">
              <IDKitWidget
                app_id={`app_${process.env.NEXT_PUBLIC_APP_ID}`}
                action={process.env.NEXT_PUBLIC_ACTION_ID || ""}
                onSuccess={onSuccess2}
                handleVerify={handleVerify}
                verification_level={VerificationLevel.Device}
              >
                {({ open }) => (
                  <Button className="w-[290px] sm:w-[320px] " onClick={open}>
                    Verify with World ID
                  </Button>
                )}
              </IDKitWidget>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="https://worldcoin.org/download-app">
              Get the WorldID App {"->"}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/sign-up-freelancer.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="max-h-[1080px] h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
