/* eslint-disable react/prop-types */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function FormCard({ title, children }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
