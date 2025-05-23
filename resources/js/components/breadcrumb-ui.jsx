import React from "react";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function BreadcrumbUi({ breadcrumb }) {
    const length = breadcrumb.length;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumb.map((item, key) => {
                    if (key + 1 === length) {
                        return (
                            <BreadcrumbItem key={key}>
                                <BreadcrumbPage>{item.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        );
                    } else {
                        return (
                            <React.Fragment key={key}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={item.link}>
                                        {item.title}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>
                        );
                    }
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
