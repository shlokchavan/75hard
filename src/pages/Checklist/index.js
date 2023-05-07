import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import "./Checklist.css";
export default function Checklist() {
  const [tasks, setTasks] = useState([
    {
      title: "Progress Photo 📸",
      desc: "Take a progress photo of your physique daily.",
      completed: false,
    },
    {
      title: "Read 10 Pages 📚",
      desc: "Read at least 10 pages of a non-fiction book per day.",
      completed: false,
    },
    {
      title: "Drink 1 Gallon Water 💧",
      desc: "Drink at least one gallon (3.78 liters) of water per day.",
      completed: false,
    },
    {
      title: "Indoor Workout 🧘🏻",
      desc: "Workout for 45 minutes inside house, daily.",
      completed: false,
    },
    {
      title: "Outdoor Workout 🏋🏻",
      desc: "Workout for 45 minutes outside, daily.",
      completed: false,
    },
    {
      title: "Follow Strict Diet 🥙",
      desc: "Strict diet with no cheat meals and no alcohol.",
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log("task updated: ", tasks);
  }, [tasks]);

  const handleTaskCheck = (index, value) => {
    setTasks(
      tasks.map((t, i) => {
        if (i === index) {
          t.completed = value;
        }
        return t;
      })
    );
  };

  return (
    <>
      <Card>
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Heading size="md">75 Hard Challenge </Heading>
            <Text>{new Date().toDateString().substring(4)}</Text>
          </Flex>
        </CardHeader>
        <Divider />
        <CardBody marginTop={4}>
          <Stack divider={<StackDivider />} spacing="4">
            {tasks &&
              tasks.map((task, index) => (
                <Flex key={index}>
                  <Box width={"100%"}>
                    <Heading size="xs" textTransform="uppercase">
                      <Flex justifyContent={"space-between"}>
                        <Text className={task.completed ? "completed" : ""}>{`${
                          index + 1
                        }. ${task?.title}`}</Text>
                        <Checkbox
                          value={task?.completed}
                          onChange={(e) =>
                            handleTaskCheck(index, e.target.checked)
                          }
                        ></Checkbox>
                      </Flex>
                    </Heading>
                    <Text
                      pt="2"
                      fontSize="sm"
                      className={task.completed ? "completed" : ""}
                    >
                      {task?.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
