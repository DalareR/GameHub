import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  theme,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";

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
      <Flex align="center">
        <Switch
          mr={"5px"}
          defaultChecked
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text fontSize="sm">Dark Mode</Text>
      </Flex>
    </HStack>
  );
}
