import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

interface NavBarProps {
  searchInput: string;
  onSearchChange: (value: string) => void;
}

export default function NavBar({ searchInput, onSearchChange }: NavBarProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Image src={"/gameIcon.png"} width="40px" height={"40px"} />
      <InputGroup margin="10px" onSubmit={() => console.log("submitted")}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          value={searchInput}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search games.."
          borderRadius={"25px"}
        />
      </InputGroup>
      <Flex align="center" justify={"center"}>
        <Switch
          mr={"5px"}
          defaultChecked
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <MoonIcon w="20px" h="20px" />
      </Flex>
    </HStack>
  );
}
