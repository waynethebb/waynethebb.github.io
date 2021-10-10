import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Post from "../interface/post";
import getBlogList from "../service/blog/get_list";
import styles from "./cli.module.css";
import {
  help,
  cd,
  clear,
  ls,
  render,
  renderErrorMsg,
  cat,
} from "../service/blog/command";

interface IProps {
  posts: Post[];
  prefix: string;
}

export default function Cli({ posts }: IProps) {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [curDir, setCurDir] = useState("");

  const containerElement = useRef<HTMLDivElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);
  const contentsElement = useRef<HTMLDivElement>(null);

  const executeCmd = (command: string) => {
    render(contentsElement, `guest: ~${curDir}$ ${inputValue}`, 10);

    if (command === "clear") {
      clear(contentsElement);
    } else if (command === "help") {
      help(contentsElement);
    } else if (command === "ls") {
      ls(contentsElement, curDir, inputValue, posts);
    } else if (command === "shutdown") {
      router.push("/");
    } else if (command[0] === "c" && command[1] === "d") {
      cd(contentsElement, curDir, setCurDir, command);
    } else if (command.split(" ")[0] === "cat") {
      cat(contentsElement, curDir, posts, command);
    } else {
      renderErrorMsg(contentsElement, inputValue);
    }

    setInputValue("");
    containerElement.current?.scrollTo(
      0,
      containerElement.current?.scrollHeight
    );
  };

  useEffect(() => {
    inputElement.current?.focus();
  }, []);
  return (
    <div className={styles.container} ref={containerElement}>
      <div className={styles.contents} ref={contentsElement} />
      <form
        className={styles.cmd}
        onSubmit={(e) => {
          e.preventDefault();
          executeCmd(inputValue);
        }}
      >
        <p className={styles.user}>guest: ~{curDir}$</p>
        <input
          type="text"
          className={styles.input}
          ref={inputElement}
          autoFocus
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value.toLowerCase());
          }}
        />
      </form>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getBlogList();
  return {
    props: {
      posts,
    },
  };
};