"use client";

import { useState } from "react";
import {
  AssignmentTable,
  assignments,
} from "../components/features/assignments";

import {
  ModuleFilesTable,
  moduleFiles,
} from "../components/features/modules";
import Badge from "../components/ui/Badge";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import CheckboxGroup from "../components/ui/CheckboxGroup";
import RadioGroup from "../components/ui/RadioGroup";
import SearchBox from "../components/ui/SearchBox";

export default function Home() {
  const [search, setSearch] = useState("");
  const [radio, setRadio] = useState("option-1");
  const [checks, setChecks] = useState(["option-1"]);

  return (
    <main className="space-y-10 bg-[#d5d5d5] p-10">
      <SearchBox
        value={search}
        onChange={setSearch}
      />
    <Breadcrumbs
      items={[
        { label: "Title", href: "/" },
        { label: "Title" },
      ]}
    />
      <RadioGroup
        title="Title goes here"
        name="example"
        value={radio}
        onChange={setRadio}
        options={[
          { label: "Title goes here", value: "option-1" },
          { label: "Title goes here", value: "option-2" },
          { label: "Title goes here", value: "option-3", disabled: true },
        ]}
      />

      <CheckboxGroup
        title="Title goes here"
        values={checks}
        onChange={setChecks}
        options={[
          { label: "Text goes here", value: "option-1" },
          { label: "Text goes here", value: "option-2" },
          { label: "Text goes here", value: "option-3", disabled: true },
        ]}
      />
      <div className="flex gap-3">
        <Badge color="orange">Badge</Badge>
        <Badge color="orange" variant="light">
          Badge
        </Badge>
      </div>

      <div className="flex gap-3">
        <Badge color="blue">Badge</Badge>
        <Badge color="blue" variant="light">
          Badge
        </Badge>
      </div>

      <div className="flex gap-3">
        <Badge color="violet">Badge</Badge>
        <Badge color="violet" variant="light">
          Badge
        </Badge>
      </div>

      <div className="flex gap-3">
        <Badge color="green">Badge</Badge>
        <Badge color="green" variant="light">
          Badge
        </Badge>
      </div>

      <div className="flex gap-3">
        <Badge color="grey">Badge</Badge>
        <Badge color="grey" variant="light">
          Badge
        </Badge>
      </div>
      <AssignmentTable
        assignments={assignments}
        average={92}
      />
      <ModuleFilesTable files={moduleFiles} />
    </main>
  );
}