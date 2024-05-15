import React from "react";
import Workflow from "@/app/(main)/(pages)/workflows/_components/workflow";

type Props = {}

const Workflows = (props: Props) => {
        return (
        <div className="relative flex flex-col">
        <section className="flex flex-col p-2">
          <Workflow
          description="Creating a test Workflow"
          id="e2345567"
          name="Automation flow"
          publish={false}
          />
        </section>
        </div>
        )
}

export default Workflows