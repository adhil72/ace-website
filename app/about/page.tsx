
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaBook, FaUsers, FaDesktop, FaFlask } from "react-icons/fa"

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">Government Engineering College Wayanad</h1>
                <h2 className="text-3xl font-semibold text-muted-foreground">Department of Computer Science and Engineering</h2>
            </header>

            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Note from Lena Ramachandran, CSE Respresentative</h3>
                <p className="text-muted-foreground">
                    I'm happy to share that this year has been full of great achievements in our Computer Science & Engineering community. The dedication and hard work of everyone involved in the association deserve special recognition.  Our association has provided useful opportunities through events and workshops , helping us build skills and connections. I encourage everyone to stay involved and make the most of these chances.
                    Let's keep supporting each other and aim for success together.
                </p>
            </section>

            <section className="mb-12 grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            To be a center of excellence in Computer Science and Engineering education, fostering innovation,
                            research, and entrepreneurship that contributes to the technological advancement of society.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Provide quality education in computer science and engineering</li>
                            <li>Foster a culture of innovation and critical thinking</li>
                            <li>Promote industry-academia collaboration</li>
                            <li>Encourage research and development activities</li>
                            <li>Develop socially responsible and ethically sound professionals</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FaBook className="mr-2" />
                                Cutting-edge Curriculum
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Our curriculum is regularly updated to reflect the latest advancements in computer science and
                                industry requirements.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FaUsers className="mr-2" />
                                Experienced Faculty
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Our department boasts a team of highly qualified and experienced faculty members dedicated to student
                                success.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FaDesktop className="mr-2" />
                                State-of-the-art Labs
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We provide access to modern computer labs equipped with the latest hardware and software technologies.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FaFlask className="mr-2" />
                                Research Opportunities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Students are encouraged to participate in research projects and present papers at national and
                                international conferences.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Our Faculty</h3>
                <p className="text-muted-foreground">
                    The CSE department is home to a diverse group of faculty members with expertise in various domains of
                    computer science. Our professors are not only excellent teachers but also active researchers, ensuring that
                    students receive education that is both theoretically sound and practically relevant.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Facilities</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>Advanced Computer Labs with high-end workstations</li>
                    <li>Dedicated Software Development Center</li>
                    <li>IoT and Embedded Systems Lab</li>
                    <li>Artificial Intelligence and Machine Learning Lab</li>
                    <li>Digital Library with access to online journals and e-books</li>
                    <li>Seminar Hall for workshops and guest lectures</li>
                </ul>
            </section>
        </div>
    )
}