import { useState } from "react";
import {
  Header,
  Text,
  Burger,
  Group,
  createStyles,
  Container,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHierarchy3, IconUser } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface CustomHeaderProps {
  links: { link: string; label: string }[];
}

export function CustomHeader({ links }: CustomHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  const items = links.map((link, i) => (
    <Group>
      <a
        key={i}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          navigate(link.link);
        }}
      >
        {link.label}
      </a>
    </Group>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Group>
          <Text>Better Infra</Text>
          <IconHierarchy3 size={28} stroke={1.5} />
        </Group>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconUser size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
