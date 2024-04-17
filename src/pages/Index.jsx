import React, { useState } from "react";
import { Box, Button, Textarea, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Research:", input);
    // ここでChatGPT APIを呼び出し、論文を生成する処理を追加する
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">論文執筆アシスタント</Text>
      <Textarea placeholder="ここに調査内容を入力してください..." value={input} onChange={handleInputChange} size="sm" />
      <Button rightIcon={<FaPaperPlane />} colorScheme="teal" onClick={handleSubmit}>
        提出
      </Button>
    </VStack>
  );
};

export default Index;
