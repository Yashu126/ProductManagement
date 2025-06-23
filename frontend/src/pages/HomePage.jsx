import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container maxW={"container-xl"} py={"12"}>
      <VStack spacing={"8"}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgClip={"text"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
        >
          Current Products
        </Text>
        <SimpleGrid
          spacing={"10"}
          columns={{base:1, md:2, lg:3}}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textAlign={"center"}
            bgClip={"text"}
            color={"cyan.500"}
          >
            No Products
            <Link to="/create">
              <Text
                fontSize={{ base: "22", sm: "15" }}
                textAlign={"center"}
                color={"gray.500"}
                as={"p"}
                textDecoration={"underline"}
              >
                Create Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
