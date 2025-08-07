export const metadata = {
  title: "Request A Quote!",
  description:
    "Leave us some information about you and your project and one of our managers will reach out to set up a discovery call with you to discuss service options and pricing.",
};

import RequestQuoteClient from "./RequestQuoteClient";

export default function Page() {
  return <RequestQuoteClient />;
}
