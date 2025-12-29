import { Zap, Image as ImageIcon } from "lucide-react";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-prose bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 my-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 m-0">
        {title}
      </h2>
      <div className="prose max-w-none mt-4">{children}</div>
    </section>
  );
}

function DiagramCard({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-4 my-6">
      <div className="flex items-center gap-2 mb-3">
        <ImageIcon className="w-4 h-4 text-gray-600" />
        <p className="text-sm text-gray-700 m-0">{label}</p>
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg border border-gray-200 bg-white"
      />
    </div>
  );
}

export function Chapter2() {
  return (
    <div className="prose max-w-none">
      <h1>Chapter 2: Resistor Color Codes</h1>

      {/* Learning Objectives */}
      <div className="not-prose bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-10">
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg mb-2 text-gray-900">Learning Objectives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Understand what resistor color bands mean</li>
              <li>Identify 4-band and 5-band resistors</li>
              <li>Determine resistor values using color codes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <SectionCard title="2. RESISTOR COLOR CODES">
        <p>
          Resistors usually have 4, 5 or 6 color bands printed on their bodies.
          In this chapter, we will focus on understanding 4-band and 5-band
          resistors, which are the most commonly used types.
        </p>

        <DiagramCard
          label="Resistor color bands overview"
          src="/images/circuitech/ch2/resistor-bands-overview.png"
          alt="Overview of resistor color bands"
        />
      </SectionCard>

      {/* 4 BAND */}
      <SectionCard title="4-Band Resistor">
        <p>
          A 4-band resistor uses the first two bands to represent the first two
          digits of the resistance value. The third band is the multiplier, and
          the fourth band represents tolerance.
        </p>

        <ul>
          <li><strong>Band 1:</strong> First digit</li>
          <li><strong>Band 2:</strong> Second digit</li>
          <li><strong>Band 3:</strong> Multiplier</li>
          <li><strong>Band 4:</strong> Tolerance</li>
        </ul>

        <DiagramCard
          label="4-band resistor example"
          src="/images/circuitech/ch2/resistor-4-band.png"
          alt="4-band resistor diagram"
        />
      </SectionCard>

      {/* 5 BAND */}
      <SectionCard title="5-Band Resistor">
        <p>
          A 5-band resistor provides higher precision. The first three bands
          represent the significant digits, the fourth band is the multiplier,
          and the fifth band indicates tolerance.
        </p>

        <ul>
          <li><strong>Band 1:</strong> First digit</li>
          <li><strong>Band 2:</strong> Second digit</li>
          <li><strong>Band 3:</strong> Third digit</li>
          <li><strong>Band 4:</strong> Multiplier</li>
          <li><strong>Band 5:</strong> Tolerance</li>
        </ul>

        <DiagramCard
          label="5-band resistor example"
          src="/images/circuitech/ch2/resistor-5-band.png"
          alt="5-band resistor diagram"
        />
      </SectionCard>

      {/* COLOR TABLE */}
      <SectionCard title="Resistor Color Code Table">
        <p>
          The table below shows the standard resistor color codes used to
          determine resistance values and tolerances.
        </p>

        <DiagramCard
          label="Resistor color code reference table"
          src="/images/circuitech/ch2/resistor-color-code-table.png"
          alt="Resistor color code table"
        />

        <div className="not-prose mt-6 p-6 bg-gray-100 rounded-xl">
          <h3 className="text-lg mb-3 text-gray-900">Key Takeaways</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>4-band resistors use 2 digits + multiplier + tolerance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>5-band resistors use 3 digits + multiplier + tolerance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Always read the resistor from the correct direction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Color charts are essential for quick identification</span>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );
}
