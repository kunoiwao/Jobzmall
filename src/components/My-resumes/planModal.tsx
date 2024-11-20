"use client";
import * as React from "react";
import Image from "next/image";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Stack from "@mui/joy/Stack";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Membership from "./Membership";
import SwithButton from "./switchButton";
import { memberShipNow, memberShipLater } from "@/data/memberShip";

export default function PlanModal() {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          sx={{
            borderRadius: "999px",
            color: "white",
            backgroundColor: "#9333EA",
            paddingY: 1.5,
            textTransform: "none",
          }}
          className="px-6 shadow-lg shadow-purple-600"
          variant="contained"
          onClick={() => {
            setLayout("center");
          }}
          startIcon={<CreateOutlinedIcon />}
        >
          Write Me a New Resume
        </Button>
      </Stack>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
        // disableBackdropClick
      >
        <ModalOverflow>
          <ModalDialog
            aria-labelledby="modal-dialog-overflow"
            layout={layout}
            sx={{
              width: {
                xs: "100%",
                sm: "90%",
              },
              height: "100%",
              padding: "24px 16px",
              backgroundColor: "#171717",
            }}
          >
            <ModalClose sx={{ borderRadius: 99, bgcolor: "white" }} />
            <div className="max-w-4xl mx-auto text-center">
              <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Elevate Your Career Journey
              </p>
            </div>
            <div className="max-w-2xl mx-auto sm:text-base text-[13px] leading-8 text-center text-gray-300">
              Your resume is the key to unlocking new opportunities. Collaborate
              with world-class writers to craft a narrative that stands out.
              100% Satisfaction Guaranteed.
            </div>
            <div className="flex justify-center gap-2">
              <div className="text-white text-sm">Excellent</div>
              <Image
                src={"/image/trustpilot-stars-45.svg"}
                alt=""
                width={120}
                height={24}
              />
              <Image
                src={"/image/trustpilot-white-text.svg"}
                alt=""
                width={90}
                height={24}
              />
            </div>
            <div className="hidden md:flex justify-center mt-8">
              <SwithButton checked={checked} setChecked={setChecked} />
            </div>
            <div className="flex items-center justify-center max-w-2xl mx-auto mt-4 md:text-lg leading-8 text-center text-gray-300">
              <div className="flex">
                <AccessTimeRoundedIcon fontSize="small" />
              </div>
              <p className="lg:text-base text-sm pl-2">
                <b className="">Estimated Delivery:</b>{" "}
                {checked ? "3 days" : "24 hours"}
              </p>
            </div>
            <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-4 md:mt-10 isolate lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
              {checked
                ? memberShipLater.map((membership, idx) => (
                    <Membership key={idx} membership={membership} />
                  ))
                : memberShipNow.map((membership, idx) => (
                    <Membership key={idx} membership={membership} />
                  ))}
            </div>

            <div className="container px-4 mx-auto max-w-7xl">
              <div className="relative grid mx-auto text-white">
                <p className="mx-auto mt-16 mb-10 text-lg leading-normal text-center text-gray-400 lg:text-xl lg:mt-14 lg:mb-5">
                  <span className="mr-2">
                    Our resumes have helped thousands land jobs in the most
                    competitive companies
                  </span>
                </p>
                <ul className="grid items-center justify-center w-full grid-cols-4 gap-8 gap-y-10 md:gap-y-16 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4">
                  <li className="flex items-center justify-center">
                    <Image
                      src="image/logo/spotify.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="h-8"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/amazon-white.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="w-20"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/netflix.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="w-20"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/nasa.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="h-14"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/meta-colored-white.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="w-20"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/microsoft.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="h-6"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/coinbase.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="h-4"
                    />
                  </li>
                  <li className="flex items-center justify-center">
                    <Image
                      src="/image/logo/paypal.svg"
                      alt=""
                      width={120}
                      height={32}
                      className="w-20"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </React.Fragment>
  );
}
