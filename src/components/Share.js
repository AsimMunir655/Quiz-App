import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
export default function Share() {
  return (
    <div className="share">
      <FacebookShareButton
        url={"https://www.facebook.com/"}
        quote={"Happy Quiz"}
        hashtag="#quiz"
      >
        <FacebookIcon size={36} borderRadius={50} style={{ marginLeft: " 10px" }} />
      </FacebookShareButton>
      <WhatsappShareButton url={"https://web.whatsapp.com/"}>
        <WhatsappIcon size={36} borderRadius={50} style={{ marginLeft: " 10px" }} />
      </WhatsappShareButton>
      <TwitterShareButton url={"https://twitter.com/"}>
        <TwitterIcon size={36} borderRadius={50} style={{ marginLeft: " 10px" }} />
      </TwitterShareButton>
      <LinkedinShareButton url={"https://www.linkedin.com/"}>
        <LinkedinIcon size={36} borderRadius={50} style={{ marginLeft: " 10px" }} />
      </LinkedinShareButton>
    </div>
  );
}
