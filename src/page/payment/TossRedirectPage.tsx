import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {startSubscription} from "@/api/server/billing.ts";

let billingRequested = false;

export const TossRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const customerKey = searchParams.get("customerKey");
  const authKey = searchParams.get("authKey");
  const tier = searchParams.get("tier");

  useEffect(() => {
    if (customerKey === null || authKey === null || tier === null) {
      console.error("토스페이먼츠 응답 오류");
      window.location.replace("/fail");
      return;
    }

    if (billingRequested) return;
    billingRequested = true;
    const requestBilling = async () => {
      await startSubscription(customerKey, authKey, parseInt(tier));
    }
    requestBilling()
      .then(() => {
        window.location.replace("/");
      })
      .catch(() => {
        window.location.replace(`/payment/fail?code="PAY_PROCESS_ERROR"&message="결제 진행 중 오류가 발생했습니다."`);
      });

  }, []);

  return (
    <div>
      결제 진행중...
    </div>
  )
}