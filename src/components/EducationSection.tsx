import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`${edu.institution}`}
              date={`📅 ${edu.period}`}
              icon={edu.icon}
              isLast={index === education.length - 1}
              index={index}
            >
              {/* <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p> */}

              {edu.courses && edu.courses.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-start">
                  {edu.courses.map((course, courseIndex) => (
                    <motion.div
                      key={courseIndex}
                      className="flex-none p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-blue-500/20 dark:bg-card/10 dark:border-blue-500/10 shadow-sm" // Eliminamos mb-4 y añadimos flex-none
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + courseIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500/10 mr-2">
                          <motion.div
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: 360 }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 1.2 + courseIndex * 0.1,
                            }}
                            viewport={{ once: true, margin: "0px" }}
                          >
                            <Award className="h-4 w-4 text-blue-500" />
                          </motion.div>
                        </div>
                        <h4 className="text-sm font-medium">
                          {`${course.degree}`}
                        </h4>
                      </div>
                      {course.achievements &&
                        course.achievements.length > 0 && (
                          <ul className="list-none space-y-2 text-sm pl-2">
                            {course.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="text-muted-foreground relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-500"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.8 + 0.2 * i + courseIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        )}
                    </motion.div>
                  ))}
                </div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
