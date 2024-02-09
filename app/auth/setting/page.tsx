"use client";
import Image from "next/image";
import PersonalForm from "@/app/components/Setting/PersonalForm";
import AddressForm from "@/app/components/Setting/AddressForm";
import AddressShow from "@/app/components/Setting/AddressShow";
import ProfileForm from "@/app/components/Setting/ProfileForm";
import useApiBase from "@/lib/useApi";
import { loadAddress } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { authSuccess } from "@/redux/features/auth-slice";

const Settings = () => {
  const user = useAppSelector((state) => state.authReducer.user);
  const addressData = useAppSelector((state) => state.authReducer.address);
  const dispatch = useDispatch<AppDispatch>();

  async function LoadAddressData() {
    const res: any = await useApiBase(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/address/",
      {
        method: "GET",
      }
    );

    if (res != null) {
      dispatch(loadAddress(res));
    }
  }

  async function GetProfile() {
    const auth = await useApiBase<JSON | null>(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/profile/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(auth);
    if (auth != null) {
      dispatch(authSuccess(auth));
    }
  }

  useEffect(() => {
    GetProfile();
    LoadAddressData();
  }, []);
  return (
    <>
      <div className="min-h-screen mx-16 py-32">
        <div className="flex flex-col justify-center items-center w-full h-full gap-6">
          {/* Personal Info */}

          <PersonalForm user={user} address={addressData} />

          <AddressShow address={addressData} />
        </div>
      </div>
    </>
  );
};

export default Settings;
