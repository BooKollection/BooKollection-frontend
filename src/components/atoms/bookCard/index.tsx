import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material";
import Image from "next/image";
import { CustomText } from "../text";

export const Card = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2px",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "1em",
  alignItems: "center",
  width: "12em",
  minHeight: "18em",
  background:
    "linear-gradient(111.88deg, rgba(255, 255, 255, 0.4) 19.21%, rgba(255, 255, 255, 0.1) 66.23%)",
  boxShadow: "0px 4px 24px -1px rgba(71, 62, 62, 0.25)",
  backdropFilter: "blur(40px)",
  borderRadius: "10px",
}));
const myLoader = ({ src, width, quality }) => {
  return src;
};

export const BookCard = ({
  name,
  imgSrc,
  edition,
  publisher,
  status,
  numberOfEditions,
}: {
  name: string;
  imgSrc: string;
  edition: string;
  publisher: string;
  status?: boolean;
  numberOfEditions?: string;
}) => (
  <Card>
    <Image
      loader={myLoader}
      src={imgSrc}
      alt="Picture of the author"
      width={150}
      height={200}
    />
    <CustomText>{name}</CustomText>
    <CustomText>{edition}</CustomText>
    <CustomText>{status}</CustomText>
    <CustomText>{publisher}</CustomText>
    <CustomText>{numberOfEditions}</CustomText>
  </Card>
);
