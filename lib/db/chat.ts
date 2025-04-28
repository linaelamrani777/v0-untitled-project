// Simulation d'une base de données d'historique de chat
export const chatHistory: Record<number, any[]> = {
  1: [
    // Utilisateur Jean Dupont
    {
      id: "1",
      userId: 1,
      moduleId: "algebre4",
      message: "Pouvez-vous m'expliquer le concept de forme bilinéaire ?",
      response:
        "Une forme bilinéaire est une application qui associe à deux vecteurs un scalaire, et qui est linéaire par rapport à chacune des variables lorsque l'autre est fixée. Formellement, une application B : V × V → K est une forme bilinéaire si pour tous vecteurs u, v, w ∈ V et tout scalaire λ ∈ K, on a B(u + λv, w) = B(u, w) + λB(v, w) et B(u, v + λw) = B(u, v) + λB(u, w).",
      timestamp: "2023-10-15T14:35:00Z",
    },
    {
      id: "2",
      userId: 1,
      moduleId: "algebre4",
      message: "Quelle est la différence entre un anneau et un corps ?",
      response:
        "Un anneau est une structure algébrique munie de deux opérations (addition et multiplication) où l'addition forme un groupe abélien et la multiplication est associative et distributive par rapport à l'addition. Un corps est un anneau commutatif où tout élément non nul possède un inverse multiplicatif. La principale différence est donc que dans un corps, la division est possible par tout élément non nul, ce qui n'est pas nécessairement le cas dans un anneau.",
      timestamp: "2023-10-15T14:40:00Z",
    },
  ],
  2: [
    // Utilisateur Marie Martin
    {
      id: "3",
      userId: 2,
      moduleId: "electronique-numerique",
      message: "Comment fonctionne un multiplexeur 4:1 ?",
      response:
        "Un multiplexeur 4:1 est un circuit combinatoire qui sélectionne l'une des 4 entrées de données et la dirige vers la sortie unique. La sélection se fait à l'aide de 2 bits de sélection (S1 et S0). Par exemple, si S1=0 et S0=0, la première entrée est sélectionnée; si S1=0 et S0=1, la deuxième entrée est sélectionnée, et ainsi de suite. Le multiplexeur est souvent utilisé pour réduire le nombre de lignes nécessaires pour transmettre des données.",
      timestamp: "2023-10-14T16:50:00Z",
    },
    {
      id: "4",
      userId: 2,
      moduleId: "structure-donnees-c",
      message: "Quelle est la complexité temporelle de la recherche dans un arbre binaire de recherche équilibré ?",
      response:
        "La complexité temporelle de la recherche dans un arbre binaire de recherche équilibré est de O(log n), où n est le nombre de nœuds dans l'arbre. Cette efficacité logarithmique est due à la propriété d'équilibre qui garantit que la hauteur de l'arbre est proportionnelle au logarithme du nombre de nœuds. À chaque étape de la recherche, on élimine environ la moitié des nœuds restants, ce qui conduit à cette complexité logarithmique.",
      timestamp: "2023-10-17T11:35:00Z",
    },
  ],
}
