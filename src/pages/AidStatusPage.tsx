import { Group, Text, Accordion } from "@mantine/core";
import {
  IconAlertCircle,
  IconCircleCheck,
  IconCircleDashed,
  IconClockStop,
} from "@tabler/icons";

const aidList = [
  {
    id: "1",
    eta: "ETA: 2022-11-10",
    status: "arrived",
    title: "Fema aid",
    content: "Sent: 2021-01-01, Current location: Lorem Ipsum",
  },

  {
    id: "2",
    eta: "ETA: 2022-11-10",
    status: "sent",
    title: "National guard aid",
    content: "Sent: 2021-01-01, Current location: Lorem Ipsum",
  },

  {
    id: "3",
    eta: "ETA: 2023-01-01",
    status: "arrived",
    title: "PR Government help",
    content: "Sent: 2021-01-01, Current location: Lorem Ipsum",
  },

  {
    id: "4",
    eta: "ETA: 2023-01-01",
    status: "late",
    title: "Fema help",
    content: "Sent: 2021-01-01, Current location: Lorem Ipsum",
  },
];

interface AccordionLabelProps {
  eta: string;
  status: string;
  title: string;
}
function AccordionLabel({ title, status, eta }: AccordionLabelProps) {
  return (
    <Group noWrap>
      {status === "arrived" ? (
        <IconCircleCheck color="green" size={40} />
      ) : status === "sent" ? (
        <IconClockStop color="orange" size={40} />
      ) : (
        <IconAlertCircle color="red" size={40} />
      )}
      <div>
        <Text>{eta}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {title}
        </Text>
      </div>
    </Group>
  );
}

export default function AidStatusPage() {
  const items = aidList.map((item) => (
    <Accordion.Item value={item.id} key={item.content}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
