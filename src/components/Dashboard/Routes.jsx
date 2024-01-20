import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CancelIcon from '@mui/icons-material/Cancel';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const data = [
  {
    icon: <SpaceDashboardIcon />,
    label: "Invoices",
    to: "/dashboard/#/",
    key: 1,
  },
  {
    icon: <SmartButtonIcon />,
    label: "Customers",
    to: "/dashboard/#/",
    key: 2,
  },
  {
    icon: <AddBusinessIcon />,
    label: "My Business",
    to: "/dashboard/#/",
    key: 3,
  },
  {
    icon: <ReceiptIcon />,
    label: "Invoice Journal",
    to: "/dashboard/#/",
    key: 4,
  },
  {
    icon: <CurrencyRubleIcon />,
    label: "Price List",
    to: "/dashboard/#/",
    key: 5,
  },
  {
    icon: <AccountBalanceIcon />,
    label: "Multiple Invoices",
    to: "/dashboard/#/",
    key: 6,
  },
  {
    icon: <CancelIcon />,
    label: "Unpaid Invoices",
    to: "/dashboard/#/",
    key: 7,
  },
  {
    icon: <LocalOfferIcon />,
    label: "Offers",
    to: "/dashboard/#/",
    key: 8,
  },
  {
    icon: <EnhancedEncryptionIcon />,
    label: "Inventory Control",
    to: "/dashboard/#/",
    key: 9,
  },
];

export default data;
