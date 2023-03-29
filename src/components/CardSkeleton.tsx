import {
  Card,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card width={"250px"} padding="20px">
      <Stack maxW={"sm"}>
        <Skeleton height={"200px"} />
        <SkeletonText noOfLines={1} />
        <SkeletonText noOfLines={1} />
      </Stack>
    </Card>
  );
}
