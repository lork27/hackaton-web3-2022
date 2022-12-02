import { useState } from "react";
import {
  Header,
  Burger,
  Group,
  createStyles,
  Container,
  ActionIcon,
  Image,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun, IconUser } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import betterInfraLogoWhite from "../assets/betterInfraLogoWhite.png";
import betterInfraLogoDark from "../assets/betterInfraLogoDark.png";
import { useAuth } from "../context/AuthContext";
import { HeaderMenu } from "./HeaderMenu";

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
    padding: "8px 10px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
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
        color:
          theme.colorScheme === "dark"
            ? theme.colors.blue[5]
            : theme.colors.red[2],
      }).background,

      color:
        theme.colorScheme === "dark"
          ? theme.colors.orange[5]
          : theme.colors.blue[5],
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { userData } = useAuth();

  const items = links.map((link, i) => (
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
          <Image
            src={dark ? betterInfraLogoDark : betterInfraLogoWhite}
            width={120}
            alt="better infra logo"
          />
        </Group>

        <ActionIcon
          variant="outline"
          color={dark ? "orange" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          {userData ? (
            <HeaderMenu />
          ) : (
            <ActionIcon size="lg" onClick={() => navigate("/admin")}>
              <IconUser />
            </ActionIcon>
          )}
        </Group>
      </Container>
    </Header>
  );
}
