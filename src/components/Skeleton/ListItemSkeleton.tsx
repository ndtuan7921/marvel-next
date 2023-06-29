import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  styled,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import Typography from "../Typography";

const TypoWrapper = styled(Box)(({ theme }) => ({
  margin: "1rem 0",
}));

const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  columnGap: "7rem",
}));

function ListItemSkeleton(props: any) {
  const { id, title, name, thumbnail, description, loading } = props;
  return (
    <>
      <ListItemButtonWrapper>
        <ListItemIcon>
          <Skeleton variant="rectangular" width={250} height={200} />
        </ListItemIcon>
        <ListItemText sx={{ rowGap: "1rem" }}>
          <TypoWrapper>
            <Skeleton />
          </TypoWrapper>
          <TypoWrapper>
            <Skeleton />
          </TypoWrapper>
          <TypoWrapper>
            <Skeleton />
          </TypoWrapper>
        </ListItemText>
      </ListItemButtonWrapper>
      <Divider />
    </>
  );
}

export default ListItemSkeleton;
