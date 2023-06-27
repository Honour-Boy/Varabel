import {ReactComponent as HomeIcon } from "../../Images/dashImg.svg"
import {ReactComponent as TransactionIcon } from "../../Images/transactionImg.svg"
import {ReactComponent as StatusIcon } from "../../Images/statusImg.svg"
import {ReactComponent as AgencyIcon } from "../../Images/agencyImg.svg"
import {ReactComponent as ErrorIcon } from "../../Images/errorImg.svg"
import {ReactComponent as MccashIcon } from "../../Images/mcashImg.svg"
import {ReactComponent as NqrIcon } from "../../Images/NqrImg.svg"
import {ReactComponent as CgateIcon } from "../../Images/cgateImg.svg"
import {ReactComponent as ProductIcon } from "../../Images/nipImg.svg"
import {ReactComponent as ContactIcon } from "../../Images/onboardingImg.svg"
import {ReactComponent as SettingsIcon } from "../../Images/settingImg.svg"

export default [
  {
    id: 1,
    selected: false,
    word: "Home",
    svg: <HomeIcon />,
  },
  {
    id: 2,
    selected: false,
    word: "Products",
    svg: <ProductIcon />,
  },
  {
    id: 3,
    selected: false,
    word: "Contact Us",
    svg: <ContactIcon />,
  },
  {
    id: 4,
    selected: false,
    word: "Settings",
    svg: <SettingsIcon />,
  },
];
