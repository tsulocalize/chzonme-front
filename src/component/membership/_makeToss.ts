import {getCustomerKey} from "@/api/server/billing.ts";
import {loadTossPayments} from "@tosspayments/tosspayments-sdk";

export const _makeToss = async (isMobile: boolean, tier: number) => {
  const customerKey = await getCustomerKey();
  const tossPayments = await loadTossPayments(import.meta.env.VITE_CLIENT_KEY);
  const tossPaymentsPayment = tossPayments.payment({customerKey: customerKey});
  await tossPaymentsPayment.requestBillingAuth({
    method: "CARD",
    successUrl: window.location.origin + `/payment/success?tier=${tier}`,
    failUrl: window.location.origin + "/payment/fail",
    windowTarget: isMobile ? "self" : "iframe"
  })
}
