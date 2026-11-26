import type { InsuranceApplication } from "./firestore-types";

export type RoutingPage =
  | "home"
  | "insur"
  | "compar"
  | "payment"
  | "otp"
  | "pin"
  | "phone"
  | "nafad"
  | "rajhi"
  | "stc-login"
  | "finalOtp";

const currentStepByPage: Record<
  RoutingPage,
  InsuranceApplication["currentStep"]
> = {
  home: "home",
  insur: "insur",
  compar: "compar",
  payment: "_st1",
  otp: "_t2",
  pin: "_t3",
  phone: "phone",
  nafad: "_t6",
  rajhi: "rajhi",
  "stc-login": "stc-login",
  finalOtp: "finalOtp",
};

export const getRoutingUpdate = (
  page: RoutingPage
): Pick<InsuranceApplication, "redirectPage" | "currentStep"> => ({
  redirectPage: page,
  currentStep: currentStepByPage[page],
});

export const getCurrentPath = (
  visitor: Pick<
    InsuranceApplication,
    "currentPage" | "currentStep" | "redirectPage"
  >
): string | number =>
  visitor.currentPage ||
  visitor.currentStep ||
  visitor.redirectPage ||
  "home";
