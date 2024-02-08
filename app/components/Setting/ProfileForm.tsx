"use client";

import React, { useState } from "react";

import { Button } from "flowbite-react";

import Image from "next/image";

function ProfileForm() {
    
    return (
        <>
            <div className="flex items-center gap-4">
                <img className="rounded w-20 h-20" src="https://avatar.oxro.io/avatar.svg?name=Ratchaphon+Hinsui&background=ffd60a&color=fff&length=2" alt=""/>
                    <div className="font-medium space-y-2 dark:text-white">
                        <Button color="dark">Change Avatar</Button>
                        <div className="text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB max.</div>
                    </div>
            </div>

        </>

    );
} export default ProfileForm;