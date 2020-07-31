import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import StepWizard from "react-step-wizard";

import { getCurrentUser, storage, db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";
import withAuth from "@src/helpers/withAuth";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import GetStartedLayout from "@components/layout/GetStartedLayout";
import Container from "@components/container/Container";
import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import SectionItem from "@components/form/SectionItem";
import LinkItem from "@components/form/LinkItem";
import Button from "@components/button/Button";

import Upload from "@icons/ui/upload.js";
import Human from "@icons/ui/human.js";
import Add from "@icons/ui/add.js";
import Arrow from "@icons/ui/arrow.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />;
}

class GS extends React.Component {
  render() {
    return (
      <GetStartedLayout>
        <Container>
          <StepWizard isHashEnabled>
            <Step1 />
            <Step2 />
            <Step3 />
          </StepWizard>
        </Container>
      </GetStartedLayout>
    );
  }
}
export default withAuth(GS);
