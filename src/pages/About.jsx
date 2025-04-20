import { MotionDiv as motion } from "../utils/AnimationFallback";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">À propos de moi</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez mon parcours personnel et professionnel
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/assets/profile.jpg" 
              alt="Nicolas Chanteux"
              className="rounded-lg shadow-lg w-full"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=About+Me";
                e.target.onerror = null;
              }}
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mon parcours</h3>
            <p className="mb-4">
              Passionné d'informatique depuis mon plus jeune âge, j'ai commencé à coder en autodidacte avant de me lancer dans des études supérieures en développement web et applications.
            </p>
            <p className="mb-4">
              Actuellement étudiant en informatique, je me spécialise dans les technologies web modernes et le développement d'applications mobiles. Mon objectif est de créer des expériences numériques à la fois esthétiques et fonctionnelles.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Centres d'intérêt</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  💻
                </div>
                <span>Programmation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  🎮
                </div>
                <span>Jeux vidéo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  📚
                </div>
                <span>Lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  🏃‍♂️
                </div>
                <span>Sport</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}