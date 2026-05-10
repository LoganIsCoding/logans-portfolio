"use client";
import Giscus from "@giscus/react";
import { useEffect, useRef } from "react";

export default function Comments() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.origin !== "https://giscus.app") return;
            if (event.data?.giscus?.discussion) {
                const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
                if (iframe) {
                    iframe.src = iframe.src;
                }
            }
        }
        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return(
        <Giscus
            repo="LoganIsCoding/logans-portfolio-comments"
            repoId="R_kgDOSZqruA"
            category="Announcements"
            categoryId="DIC_kwDOSZqruM4C8u_u"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme="dark"
            lang="en"
        />
    );
}